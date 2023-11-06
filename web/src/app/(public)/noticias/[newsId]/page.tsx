'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoChevronBack } from 'react-icons/io5'

import { api } from '@/lib/axios'
import Container from '@/components/Container'

type NewsContentProps = {
  params: {
    newsId: string
  }
}

type News = {
  id: string
  title: string
  content: string
  coverURL: string
  authorId: string
  createdAt: string
  updatedAt: string
  published: boolean
}

const posts = {
  'b67a0b99-14a6-4608-942f-85333a508114': {
    id: 'b67a0b99-14a6-4608-942f-85333a508114',
    title: 'A Importância do Versionamento de Código',
    content:
      '<p>O versionamento de c&oacute;digo &eacute; uma pr&aacute;tica essencial no desenvolvimento de software. Ele permite que equipes de programadores colaborem de forma eficiente, rastreiem altera&ccedil;&otilde;es em um c&oacute;digo-fonte e revertam para vers&otilde;es anteriores, caso seja necess&aacute;rio. As ferramentas de versionamento, como o Git, tornaram essa tarefa mais f&aacute;cil do que nunca.</p>\n<p>Por que o versionamento &eacute; crucial?</p>\n<ul>\n<li><strong>Colabora&ccedil;&atilde;o Eficiente:</strong> Com o versionamento, v&aacute;rias pessoas podem trabalhar no mesmo projeto simultaneamente. Cada altera&ccedil;&atilde;o &eacute; registrada e pode ser mesclada com o c&oacute;digo principal sem conflitos.<br><br></li>\n<li><strong>Rastreamento de Altera&ccedil;&otilde;es:</strong> Voc&ecirc; pode ver quem fez quais altera&ccedil;&otilde;es e quando. Isso &eacute; &uacute;til para solucionar problemas e manter um hist&oacute;rico claro do desenvolvimento.<br><br></li>\n<li><strong>Recupera&ccedil;&atilde;o de Vers&otilde;es Anteriores:</strong> Se algo der errado, voc&ecirc; pode facilmente reverter para uma vers&atilde;o anterior do c&oacute;digo, evitando perda de dados importantes.<br><br></li>\n<li><strong>Ramifica&ccedil;&otilde;es (Branches):</strong> Voc&ecirc; pode criar ramifica&ccedil;&otilde;es do c&oacute;digo principal para trabalhar em novos recursos ou corre&ccedil;&otilde;es de bugs sem afetar o c&oacute;digo principal.<br><br></li>\n<li><strong>Integra&ccedil;&atilde;o Cont&iacute;nua (CI):</strong> O versionamento de c&oacute;digo &eacute; fundamental para implementar fluxos de integra&ccedil;&atilde;o cont&iacute;nua, garantindo que as altera&ccedil;&otilde;es sejam testadas automaticamente.</li>\n</ul>\n<p>Em resumo, o versionamento de c&oacute;digo &eacute; uma pr&aacute;tica indispens&aacute;vel para qualquer projeto de desenvolvimento de software. Utilize ferramentas como Git e GitHub para simplificar o processo e manter seu c&oacute;digo organizado e seguro.</p>',
    coverURL:
      'https://media.discordapp.net/attachments/1013165623188148234/1152340806385016902/conceito-de-colagem-de-html-e-css.jpg?ex=65455881&is=6532e381&hm=e72c8f73070f00146d20811467d12e261df08ca6b20acc19ba3f3e5b86d5e1f0&=&width=726&height=484',
    published: true,
    authorId: '1cb1ed37-a97e-4c48-b0d4-702a4d51f3c6',
    createdAt: '2023-10-16T23:54:02.817Z',
    updatedAt: '2023-10-17T02:59:41.768Z',
  },
  'fd2085fb-26ba-4b41-a389-4b0fd25e101d': {
    id: 'fd2085fb-26ba-4b41-a389-4b0fd25e101d',
    title: 'O Futuro da Inteligência Artificial e Machine Learning',
    content:
      '<p>A <span style="color: rgb(224, 62, 45);">Intelig&ecirc;ncia Artificial (IA)</span> e o <span style="color: rgb(224, 62, 45);">Machine Learning (ML)</span> t&ecirc;m sido os impulsionadores de inova&ccedil;&otilde;es tecnol&oacute;gicas nos &uacute;ltimos anos. Mas, o que o futuro reserva para essas &aacute;reas emocionantes? Aqui est&atilde;o algumas tend&ecirc;ncias que est&atilde;o moldando o futuro da IA e do ML:</p>\n<p>&nbsp;</p>\n<ol>\n<li><strong>IA Explic&aacute;vel:</strong><br>A capacidade de entender e explicar as decis&otilde;es tomadas por modelos de IA &eacute; essencial. A IA explic&aacute;vel &eacute; uma tend&ecirc;ncia que visa tornar os sistemas de IA mais transparentes e confi&aacute;veis, especialmente em setores como sa&uacute;de e finan&ccedil;as.<br><br></li>\n<li><strong>Aprendizado Federado:</strong><br>O aprendizado federado permite treinar modelos de ML em dados descentralizados, sem a necessidade de compartilhar informa&ccedil;&otilde;es sens&iacute;veis. Isso &eacute; crucial para a privacidade dos dados e a seguran&ccedil;a.<br><br></li>\n<li><strong>IA em Edge Computing:</strong><br>Com o aumento da computa&ccedil;&atilde;o em dispositivos locais (edge computing), a IA est&aacute; sendo integrada em dispositivos como smartphones, carros e dispositivos IoT, permitindo decis&otilde;es mais r&aacute;pidas e aut&ocirc;nomas.<br><br></li>\n<li><strong>Aprendizado por Refor&ccedil;o Avan&ccedil;ado:</strong><br>O aprendizado por refor&ccedil;o avan&ccedil;ado est&aacute; sendo aplicado em jogos, rob&oacute;tica e otimiza&ccedil;&atilde;o de processos, resultando em sistemas mais inteligentes e capazes de tomar decis&otilde;es complexas.<br><br></li>\n<li><strong>IA na &Aacute;rea de Sa&uacute;de:</strong><br>A IA est&aacute; transformando a medicina, auxiliando em diagn&oacute;sticos, descoberta de medicamentos e personaliza&ccedil;&atilde;o de tratamentos, prometendo avan&ccedil;os significativos na &aacute;rea de sa&uacute;de.</li>\n</ol>\n<p>&nbsp;</p>\n<p>Essas tend&ecirc;ncias est&atilde;o moldando o futuro da IA e do ML, e as possibilidades s&atilde;o emocionantes. Este &eacute; um campo em constante evolu&ccedil;&atilde;o, e a inova&ccedil;&atilde;o continua a desempenhar um papel fundamental no desenvolvimento de tecnologias que melhoram nossas vidas e impulsionam o progresso em diversos setores.</p>',
    coverURL:
      'http://localhost:5000/uploads/bd3cc8dd-35dd-4749-9308-b9276cdab455.png',
    published: true,
    authorId: '1cb1ed37-a97e-4c48-b0d4-702a4d51f3c6',
    createdAt: '2023-10-23T22:21:51.467Z',
    updatedAt: '2023-11-02T20:36:48.783Z',
  },
}

export default function NewsContent({ params }: NewsContentProps) {
  const { newsId } = params

  const [news, setNews] = useState<News | null>(null)

  const loadingNews = async () => {
    try {
      // const response = await api.get(`/post/${newsId}`)

      // setNews(response.data)

      setNews(posts[newsId])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingNews()
  }, [])

  if (!news) return

  return (
    <section className="py-8">
      <Container>
        <div className="mb-8 mt-0">
          <Link
            href="/noticias"
            className="flex items-center gap-1 font-bold hover:opacity-80"
          >
            <IoChevronBack className="text-2xl" />
            Voltar
          </Link>
        </div>

        <div className="space-y-8">
          <h1 className="text-2xl font-bold">{news?.title}</h1>

          {news?.coverURL && (
            <Image
              width={1024}
              height={720}
              src={news?.coverURL}
              alt=""
              className="max-h-[520px] rounded-lg object-cover"
            />
          )}

          <div
            className="tinymce"
            dangerouslySetInnerHTML={{ __html: news?.content }}
          ></div>
        </div>
      </Container>
    </section>
  )
}
