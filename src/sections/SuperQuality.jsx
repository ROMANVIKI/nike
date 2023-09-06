import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section className="flex justify-between
    items-center max-lg:flex-col 
    gap-10 w-full max-container" 
    id="about-us">
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin
        text-4xl capitalize 
        lg:max-w-lg
        font-bold'>
          We Provide You
            <span className='text-coral-red'> Super</span> 
            <span className='text-coral-red'> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style,
         out meticulously crafted footwear is designed to 
         elevate your experiencem, providing you with 
         unmatched quality, innovationm and a touch of 
         elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our decication is detail and excellance ensures your satisfaction</p>
        <div className="mt-11">
            <Button label="View Details"
            />
        </div>


      </div>
      <div className="flex-1 flex justify-center items-center"> 
        <img src={shoe8} 
          width={570}
          height={522}
          className="object-contain"
          alt="" />
      </div>
    </section>
  )
}

export default SuperQuality