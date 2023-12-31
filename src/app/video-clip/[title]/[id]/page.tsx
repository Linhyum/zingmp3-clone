import Video from '@/modules/Video/Video'
import React from 'react'

export default function page({ params }: { params: { id: string } }) {
   return <Video params={params} />
}
