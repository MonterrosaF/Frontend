import { Loader } from '../../components';
import { withKeycloakAuth } from '../../config';
import { useGetMyPetsQuery } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';

const MyPets = () => {
  const { isFetching, isLoading, data } = useGetMyPetsQuery({});

  const _isLoading = isFetching || isLoading;

  return (
    <div className='w-full'>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <>
          {data.map((item) => {
            return (
              <MyPetCard
                key={item.pet.id}
                image={item.images[0].url}
                altImage={item.images[0].title}
                petName={item.pet.name}
                breed={item.pet.breed.name}
                species={item.pet.breed.species.name}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default withKeycloakAuth(MyPets);