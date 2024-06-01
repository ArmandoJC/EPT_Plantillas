import { PlantillasLayout } from '../layout/PlantillasLayout';
import { CardsView, NothingSelectedView } from '../views';
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
    if(searchText===''){
      return setplantillasFiltered(plantillas)
    }
    return setplantillasFiltered([])
    // const data = plantillas.filter((plantilla) => {

    // })

  }

  return (
    <PlantillasLayout formData={formData} onSearch={onSearch}>
      {/* <NothingSelectedView /> */}
      <CardsView plantillasFiltered={plantillasFiltered}/>
    </PlantillasLayout>
  )
}