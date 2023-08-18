import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner'
import VaccineCard from '@/components/vaccinecard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px",display:"flex", flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
        <VaccineCard/>
      </div>
    </main>
  )
}
