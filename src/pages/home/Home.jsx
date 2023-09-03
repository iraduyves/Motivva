import React, { useMemo } from 'react'
import './home.css'
import Clubs from '../../components/clubs'
import ClubItem from '../../components/clubItem'
import GridList from '../../components/gridList'
import Filters from '../../components/filters'

const Home = () => {
  const clubs = useMemo(() =>
    ['All', 'Communication', "Workout","Mindfullness","Engineering","Health","Parenting","Entreprenuership","Entertainment",], [])
  const apiClubs = useMemo(() =>
    [
      {
        image: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg',
        title: 'coding clubs',
        leader: {
          name: 'Kevin',
          profile: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
        },
        members: 5970
      },
      {
        image: 'https://thumbs.dreamstime.com/b/digital-illustration-dna-structure-abstract-medical-background-technology-145822099.jpg',
        title: 'Health',
        leader: {
          name: 'Yves',
          profile:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOn9shF9kc5vPqgA30DXU0prx5-aYyh28Rw&usqp=CAU'
        },
        members: 5970
      },
      {
        image: 'https://static8.depositphotos.com/1025323/1071/i/450/depositphotos_10719412-stock-photo-message-cloud.jpg',
        title: 'Communication',
        leader: {
          name: 'Agahozo',
          profile: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp'
        },
        members: 5970
      },
      {
        image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ufGVufDB8fDB8fHww&w=1000&q=80',
        title: 'Engineering ',
        leader: {
          name: 'Sheezy',
          profile: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        },
        members: 5970
      },
    
    ], [])

  return (
    <React.Fragment>
      <div>
        <Clubs />
        <section className='home_content'>
          <h3>Top Clubs</h3>
          <Filters items={clubs} />
          <GridList>
            {
              apiClubs.map(item => (
                <div className='grid_item' key={item.title}>
                  <ClubItem {...item} />
                </div>
              ))
            }
          </GridList>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Home