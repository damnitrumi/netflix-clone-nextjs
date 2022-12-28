import * as Styled from "./styles";
import { PlusLg } from "@styled-icons/bootstrap";
import { Text } from "components/Text";
import { useState } from "react";
import Link from "next/link";

export type AnswerProps = {
  tab: number;
  index: number;
};

export function FrequentlyAsked() {
  const [tab, setTab] = useState(0);

  const handleClick = (index: number) => {
    if (tab !== index) {
      setTab(index);
    }
    if (tab == index) {
      setTab(0);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(1)}>
            O que é a Netflix?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={1}>
          <Text size="2.6rem">
            A Netflix é um serviço de streaming que oferece uma ampla variedade
            de séries, filmes e documentários premiados em milhares de aparelhos
            conectados à internet. Você pode assistir a quantos filmes e séries
            quiser, quando e onde quiser – tudo por um preço mensal acessível.
            Aqui você sempre encontra novidades. A cada semana, adicionamos
            novas séries e filmes.
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(2)}>
            Quanto custa a Netflix?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={2}>
          <Text size="2.6rem">
            Assista à Netflix no seu celular, tablet, Smart TV, notebook ou
            aparelho de streaming por uma taxa mensal única. Os planos variam de
            R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(3)}>
            O que muda no plano Básico com anúncios?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={3}>
          <Text size="2.6rem">
            O plano Básico com anúncios é uma excelente maneira de assistir a
            séries e filmes por um preço mais baixo. Você pode assistir a seus
            títulos favoritos em qualquer aparelho e com intervalos limitados
            para anúncios. Este plano não permite downloads nem contém
            determinados filmes e séries com restrições de licenciamento. Há
            também algumas restrições de localização e aparelho.{" "}
            <Link href="/">Saiba mais.</Link>
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(4)}>
            Onde posso assistir?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={4}>
          <Text size="2.6rem">
            Assista onde quiser, quando quiser. Faça login com sua conta Netflix
            em netflix.com para começar a assistir no computador ou em qualquer
            aparelho conectado à Internet compatível com o aplicativo Netflix,
            como Smart TVs, smartphones, tablets, aparelhos de streaming e
            videogames. Você também pode baixar a sua série favorita com o
            aplicativo Netflix para iOS, Android ou Windows 10. Use downloads
            para levar a Netflix para onde quiser sem precisar de conexão com a
            Internet. Leve a Netflix com você para qualquer lugar.
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(5)}>
            Como faço para cancelar?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={5}>
          <Text size="2.6rem">
            A Netflix é flexível. Não há contratos nem compromissos. Você pode
            cancelar a sua conta na internet com apenas dois cliques. Não há
            taxa de cancelamento – você pode começar ou encerrar a sua
            assinatura a qualquer momento.
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(6)}>
            O que posso assistir na Netflix?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={6}>
          <Text size="2.6rem">
            A Netflix tem um grande catálogo de filmes, documentários, séries,
            originais Netflix premiados e muito mais. Assista o quanto quiser,
            quando quiser.
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
      <Styled.OptionContainer>
        <li>
          <Styled.FrequentlyAskedBtn onClick={() => handleClick(7)}>
            A Netflix é adequada para crianças?
            <PlusLg />
          </Styled.FrequentlyAskedBtn>
        </li>
        <Styled.Answer tab={tab} index={7}>
          <Text size="2.6rem">
            A experiência infantil da Netflix faz parte da sua assinatura para
            que as crianças se divirtam em seu próprio espaço com séries e
            filmes familiares sob a supervisão dos responsáveis. O recurso de
            controle parental, incluso nos perfis para crianças e protegido por
            PIN, permite restringir a classificação etária do conteúdo que as
            crianças podem ver e bloquear títulos específicos que você não quer
            que elas assistam.
          </Text>
        </Styled.Answer>
      </Styled.OptionContainer>
    </Styled.Wrapper>
  );
}
