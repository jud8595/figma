import { Carousel } from "./carousel/Carousel"
import { ServiceCard } from "./card/ServiceCard"


export const ServiceCardCarousel: React.FC = () => {
    
    return (
      <Carousel>

        <ServiceCard
          smallTitle={"Dans l'oeil du datalab"}
          title={"Le baromètre des taux"}
          content={"Découvrez les taux du moment en fonction de votre profil d'acheteur et de votre durée d'emprunt. Une vision complète du marché."} />

        <ServiceCard
          smallTitle={"Instantané"}
          title={"Les calculettes"}
          content={"Mensualités, taux d'endettement, frais de remboursement ou de notaire etc. Anticipez-les grâce à nos différentes calculettes."} />

        <ServiceCard
          smallTitle={"Mode d'emploi"}
          title={"Documents pratiques"}
          content={"Tableau d'amortissement, check lists et lettres types, tous les documents dont vous avez besoin durant votre achat."} />

      </Carousel>
    )
}