import placesData from '@/app/data/places'
import PlaceComponent from '@/app/components/placeComponent'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-8">
        {placesData.map((place, index) => (
          <PlaceComponent
            key={index}
            image={place.image}
            location={place.location}
            title={place.title}
            date={place.date}
            description={place.description}
          />
        ))}
      </div>
    </div>
  )
}