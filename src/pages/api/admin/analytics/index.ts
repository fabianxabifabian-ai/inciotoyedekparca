import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session?.user) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    try {
      const analyticsCodes = await prisma.analyticsCode.findMany({
        orderBy: [
          { priority: 'asc' },
          { createdAt: 'desc' }
        ],
        include: {
          createdBy: {
            select: {
              name: true,
              email: true,
            }
          }
        }
      })

      res.status(200).json(analyticsCodes)
    } catch (error) {
      console.error('Analytics codes fetch error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else if (req.method === 'POST') {
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

      if (!name || !type) {
        return res.status(400).json({ message: 'Name and type are required' })
      }

      const analyticsCode = await prisma.analyticsCode.create({
        data: {
          name,
          type,
          headCode: headCode || null,
          bodyCode: bodyCode || null,
          isActive: isActive ?? true,
          priority: priority || 1,
          description: description || null,
          createdById: session.user.id,
        },
      })

      res.status(201).json(analyticsCode)
    } catch (error) {
      console.error('Analytics code creation error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
} 