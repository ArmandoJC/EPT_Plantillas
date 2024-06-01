import { PlantillasLayout } from '../layout/PlantillasLayout';
import { CardsView } from '../views';
import { useForm } from '../../hooks/useForm';
import { data } from '../../constants';
import { useState } from 'react';

const plantillas = data.plantillas;

export const PlantillasPage = () => {
  const [plantillasFiltered, setplantillasFiltered] = useState(plantillas)
  const formData = useForm({
    searchText: '',
  });

  const onSearch = (searchText) => {
    if (searchText === '') {
      return setplantillasFiltered(plantillas)
    }
    const lowerCaseSearchText = searchText.toLocaleLowerCase().trim();
    const newPlantillasFiltered = plantillas.filter((plantilla) => plantilla.title.toLocaleLowerCase().includes(lowerCaseSearchText) || plantilla.description.toLocaleLowerCase().includes(lowerCaseSearchText))
    return setplantillasFiltered(newPlantillasFiltered)
  }

  return (
    <PlantillasLayout formData={formData} onSearch={onSearch}>
      {/* <NothingSelectedView /> */}
      <CardsView plantillasFiltered={plantillasFiltered} />
    </PlantillasLayout>
  )
}