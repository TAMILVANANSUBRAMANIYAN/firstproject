	
	import  Outfitoftheday from "../Assets/Outfitoftheday"
    import "./Trendingcollection.css"
   import Cardbox from "../Cards/Cards"
   function Trandingcollection() {
       return (
           <div>
                  <h4>OUTFIT OF THE DAY</h4>
          <div className="container_row">
           
           {
            Outfitoftheday.map((product,index) => (
               <Cardbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price}offer={product.offer} />
             ) )
           }
           
         </div>
           </div>
       )
   }
   export default Trandingcollection