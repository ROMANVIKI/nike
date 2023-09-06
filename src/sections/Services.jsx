import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="max-contain flex justify-center
      flex-wrap gap-9
    ">
      {services.map((service)=> (
        <ServiceCard  key={service.lablel}
          {...service}
        />
      ))}
    </section>
  )
}

export default Services