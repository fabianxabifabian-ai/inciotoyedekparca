import { useEffect } from 'react'
import Head from 'next/head'

interface AnalyticsCode {
  id: string
  headCode: string | null
  bodyCode: string | null
  isActive: boolean
  priority: number
}

interface AnalyticsInjectorProps {
  analyticsCodes: AnalyticsCode[]
}

export default function AnalyticsInjector({ analyticsCodes }: AnalyticsInjectorProps) {
  // Body kodlarını inject et
  useEffect(() => {
    // Sadece aktif ve body kodu olan analytics kodlarını filtrele
    const activeBodyCodes = (analyticsCodes || [])
      .filter(code => code.isActive && code.bodyCode)
      .sort((a, b) => a.priority - b.priority)

    // Önceki body kodlarını temizle
    const existingBodyScripts = document.querySelectorAll('[data-analytics-body="true"]')
    existingBodyScripts.forEach(script => script.remove())

    // Yeni body kodlarını ekle
    activeBodyCodes.forEach((code, index) => {
      if (code.bodyCode) {
        // Script tag'i varsa çalıştır, yoksa innerHTML olarak ekle
        if (code.bodyCode.includes('<script>') || code.bodyCode.includes('<noscript>')) {
          const wrapper = document.createElement('div')
          wrapper.innerHTML = code.bodyCode
          wrapper.setAttribute('data-analytics-body', 'true')
          wrapper.setAttribute('data-analytics-id', code.id)
          wrapper.style.display = 'none'
          
          // Body'nin başına ekle
          document.body.insertBefore(wrapper, document.body.firstChild)
          
          // Script tag'leri çalıştır
          const scripts = wrapper.querySelectorAll('script')
          scripts.forEach(script => {
            const newScript = document.createElement('script')
            if (script.src) {
              newScript.src = script.src
            } else {
              newScript.textContent = script.textContent
            }
            // Script attributelerini kopyala
            Array.from(script.attributes).forEach(attr => {
              newScript.setAttribute(attr.name, attr.value)
            })
            newScript.setAttribute('data-analytics-body', 'true')
            newScript.setAttribute('data-analytics-id', code.id)
            
            document.head.appendChild(newScript)
            script.remove()
          })
        } else {
          // Script olmayan HTML content
          const wrapper = document.createElement('div')
          wrapper.innerHTML = code.bodyCode
          wrapper.setAttribute('data-analytics-body', 'true')
          wrapper.setAttribute('data-analytics-id', code.id)
          wrapper.style.display = 'none'
          
          document.body.insertBefore(wrapper, document.body.firstChild)
        }
      }
    })

    // Cleanup function
    return () => {
      const elementsToRemove = document.querySelectorAll('[data-analytics-body="true"]')
      elementsToRemove.forEach(element => element.remove())
    }
  }, [analyticsCodes])

  // Head kodlarını Next.js Head component ile inject et
  const activeHeadCodes = (analyticsCodes || [])
    .filter(code => code.isActive && code.headCode)
    .sort((a, b) => a.priority - b.priority)

  return (
    <Head>
      {activeHeadCodes.map((code) => (
        <script
          key={`head-${code.id}`}
          dangerouslySetInnerHTML={{
            __html: code.headCode || ''
          }}
          data-analytics-head="true"
          data-analytics-id={code.id}
        />
      ))}
    </Head>
  )
} 