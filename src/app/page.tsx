import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner'
import VaccineCard from '@/components/vaccinecard'
import CardPanel from '@/components/cardpanel'
import { PromoteCard } from '@/components/PromoteCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <PromoteCard></PromoteCard>
    </main>
  )
}
