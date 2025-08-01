import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session?.user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { id } = req.query

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  if (req.method === 'GET') {
    try {
      const analyticsCode = await prisma.analyticsCode.findUnique({
        where: { id },
        include: {
          createdBy: {
            select: {
              name: true,
              email: true,
            }
          }
        }
      })

      if (!analyticsCode) {
        return res.status(404).json({ message: 'Analytics code not found' })
      }

      res.status(200).json(analyticsCode)
    } catch (error) {
      console.error('Analytics code fetch error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else if (req.method === 'PUT') {
    try {
      const {
        name,
        type,
        headCode,
        bodyCode,
        isActive,
        priority,
        description,
      } = req.body

      // Sadece isActive güncellemesi için kısayol
      if (Object.keys(req.body).length === 1 && 'isActive' in req.body) {
        const analyticsCode = await prisma.analyticsCode.update({
          where: { id },
          data: { isActive },
        })
        return res.status(200).json(analyticsCode)
      }

      // Tam güncelleme
      const analyticsCode = await prisma.analyticsCode.update({
        where: { id },
        data: {
          ...(name && { name }),
          ...(type && { type }),
          headCode: headCode || null,
          bodyCode: bodyCode || null,
          ...(typeof isActive === 'boolean' && { isActive }),
          ...(priority && { priority }),
          description: description || null,
        },
      })

      res.status(200).json(analyticsCode)
    } catch (error) {
      console.error('Analytics code update error:', error)
      
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({ message: 'Analytics code not found' })
      }
      
      res.status(500).json({ message: 'Internal server error' })
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.analyticsCode.delete({
        where: { id },
      })

      res.status(200).json({ message: 'Analytics code deleted successfully' })
    } catch (error) {
      console.error('Analytics code deletion error:', error)
      
      if ((error as any)?.code === 'P2025') {
        return res.status(404).json({ message: 'Analytics code not found' })
      }
      
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
} 