import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }

  try {
    // Sadece aktif analytics kodlarını al
    const analyticsCodes = await prisma.analyticsCode.findMany({
      where: {
        isActive: true
      },
      orderBy: [
        { priority: 'asc' },
        { createdAt: 'desc' }
      ],
      select: {
        id: true,
        headCode: true,
        bodyCode: true,
        isActive: true,
        priority: true,
      }
    })

    // Cache headers ekle
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    
    res.status(200).json(analyticsCodes)
  } catch (error) {
    console.error('Public analytics codes fetch error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
} 