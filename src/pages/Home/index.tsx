import {
  AdvertisingContainer,
  CoffeeTitles,
  HomeContainer,
  ListCardContainer,
  ListContainer,
  TitleContainer,
} from './styles'
import coffeeAdvertising from '../../assets/advertising-coffee.svg'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { CoffeCard } from './components/CoffeCard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const coffees = [
  {
    id: '1',
    images:
      'https://user-images.githubusercontent.com/99914904/203168768-9b530711-0d75-4700-ab44-ea4cf22142c0.png',
    attributes: ['TRADICIONAL'],
    coffeeType: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    amount: 0,
  },
  {
    id: '2',
    images:
      'https://user-images.githubusercontent.com/99914904/203169196-8f125a85-9af2-49d7-b1d9-79c122174d3a.png',
    attributes: ['TRADICIONAL'],
    coffeeType: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    amount: 0,
  },
  {
    id: '3',
    images:
      'https://user-images.githubusercontent.com/99914904/203175432-092d8d65-abef-42df-a4f5-cad848287893.png',
    attributes: ['TRADICIONAL'],
    coffeeType: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    amount: 0,
  },
  {
    id: '4',
    images:
      'https://user-images.githubusercontent.com/99914904/203174755-796a41b1-82a1-4327-9f73-a4342a61d967.png',
    attributes: ['TRADICIONAL', 'GELADO'],
    coffeeType: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    amount: 0,
  },
  {
    id: '5',
    images:
      'https://user-images.githubusercontent.com/99914904/203174761-47292f47-5352-4e56-a91e-c853ec455436.png',
    attributes: ['TRADICIONAL', 'COM LEITE'],
    coffeeType: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    amount: 0,
  },
  {
    id: '6',
    images:
      'https://user-images.githubusercontent.com/99914904/203174767-38e6b161-a877-40e9-9d16-b7b15588251d.png',
    attributes: ['TRADICIONAL', 'COM LEITE'],
    coffeeType: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    amount: 0,
  },
  {
    id: '7',
    images:
      'https://user-images.githubusercontent.com/99914904/203174776-377cb0f2-2886-4005-bfa5-084d790b4304.png',
    attributes: ['TRADICIONAL', 'COM LEITE'],
    coffeeType: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    amount: 0,
  },
  {
    id: '8',
    images:
      'https://user-images.githubusercontent.com/99914904/203175681-1ffd2d16-f6bf-4f7b-a237-f2f4fb7b6719.png',
    attributes: ['TRADICIONAL', 'COM LEITE'],
    coffeeType: 'Macchiato',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    amount: 0,
  },
  {
    id: '9',
    images:
      'https://user-images.githubusercontent.com/99914904/203175687-b773418a-c378-4aa4-8465-782d94e1b725.png',
    attributes: ['TRADICIONAL', 'COM LEITE'],
    coffeeType: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    amount: 0,
  },
  {
    id: '10',
    images:
      'https://user-images.githubusercontent.com/99914904/203175693-6c28a2ad-ce4b-4661-ad3a-020dd5f9661c.png',
    attributes: ['ESPECIAL', 'COM LEITE'],
    coffeeType: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    amount: 0,
  },
  {
    id: '11',
    images:
      'https://user-images.githubusercontent.com/99914904/203175697-3022b82b-b40e-4a33-a2d6-ec6b6e525542.png',
    attributes: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    coffeeType: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    amount: 0,
  },
  {
    id: '12',
    images:
      'https://user-images.githubusercontent.com/99914904/203175700-d49150cd-c9be-4e75-8142-795e6569eecd.png',
    attributes: ['ESPECIAL'],
    coffeeType: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    amount: 0,
  },
  {
    id: '13',
    images:
      'https://user-images.githubusercontent.com/99914904/203175703-2bdd5e05-b256-42a9-bbdc-3c60122f0bcf.png',
    attributes: ['ESPECIAL'],
    coffeeType: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    amount: 0,
  },
  {
    id: '14',
    images:
      'https://user-images.githubusercontent.com/99914904/203175708-eb3f14a4-f553-426f-9c21-ec59deba240c.png',
    attributes: ['ESPECIAL', 'ALCOÓLICO'],
    coffeeType: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    amount: 0,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <ToastContainer />
      <AdvertisingContainer>
        <section>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </TitleContainer>
          <ListContainer>
            <div>
              <li>
                <i className="cart">
                  <ShoppingCart size={16} weight="fill" />
                </i>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <i className="timer">
                  <Timer size={16} weight="fill" />
                </i>
                <span>Entrega rápida e rastreada</span>
              </li>
            </div>
            <div>
              <li>
                <i className="package">
                  <Package size={16} weight="fill" />
                </i>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <i className="coffee">
                  <Coffee size={16} weight="fill" />
                </i>
                <span>O café chega fresquinho até você</span>
              </li>
            </div>
          </ListContainer>
        </section>
        <img src={coffeeAdvertising} alt="Imagem de propaganda café" />
      </AdvertisingContainer>
      <CoffeeTitles>Nossos cafés</CoffeeTitles>
      <ListCardContainer>
        {coffees.map((coffee) => {
          return <CoffeCard key={coffee.id} product={coffee} />
        })}
      </ListCardContainer>
    </HomeContainer>
  )
}
