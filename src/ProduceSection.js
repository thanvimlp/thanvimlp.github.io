import React from "react";
import "./ProduceSection.css";
function ProduceSection() {
  return (
    <section className="produce-section">
      <h2 className="produce-heading">Our produce range</h2>
      <p className="produce-subheading">
        Supplying the finest fresh produce, high-quality dairy, essential
        ambient goods, and more – get in touch today to explore our full range!
      </p>
      <div className="card-container">
        <div className="card">
          <div className="card-inner">
            {/* Front side */}
            <div className="card-front">
              <img
                width="320"
                height="320"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/85.jpg"
                className="card-image fruits"
                alt="Fruits"
              />
              <div className="card-label">Fruits</div>
            </div>

            {/* Back side */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Apples</li>
                <li>Avocados</li>
                <li>Bananas</li>
                <li>
                  Clementines<br></br>/ Satsumas
                </li>
                <li>Grapes</li>
                <li>
                  Lemons<br></br>/Limes
                </li>
                <li>Melons</li>
                <li>Pineapples</li>
                <li>Strawberries</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front side */}
            <div className="card-front">
              <img
                width="321"
                height="320"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Mask-Group-1.jpg"
                className="card-image vegetables"
                alt="Vegetables"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Mask-Group-1.jpg 321w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Mask-Group-1-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/Mask-Group-1-150x150.jpg 150w"
                sizes="(max-width: 321px) 100vw, 321px"
              />
              <div className="card-label">Vegetables</div>
            </div>

            {/* Back side */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Aubergine</li>
                <li>Baby Vegetables</li>
                <li>Broccoli</li>
                <li>Carrots</li>
                <li>Cauliflower</li>
                <li>Leeks</li>
                <li>Mushrooms</li>
                <li>Potatoes</li>
                <li>Wild Produce</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front */}
            <div className="card-front">
              <img
                width="319"
                height="320"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/60.jpg"
                className="card-image salad-Herbs"
                alt="Salad's & Herbs"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/60.jpg 319w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/60-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/60-150x150.jpg 150w"
                sizes="(max-width: 319px) 100vw, 319px"
              />
              <div className="card-label">
                Salad's &<br /> Herbs
              </div>
            </div>

            {/* Back */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Beetroot</li>
                <li>Chili’s</li>
                <li>Cucumbers</li>
                <li>Fresh Herbs</li>
                <li>Lettuces</li>
                <li>Peppers</li>
                <li>Roquette</li>
                <li>Spinach</li>
                <li>Tomatoes</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front */}
            <div className="card-front">
              <img
                width="320"
                height="320"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/86.jpg"
                className="card-image micro-flowers"
                alt="Micro & Flowers"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/86.jpg 320w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/86-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/86-150x150.jpg 150w"
                sizes="(max-width: 320px) 100vw, 320px"
              />
              <div className="card-label">
                Micro &<br /> Flowers
              </div>
            </div>

            {/* Back */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Edible Flowers</li>
                <li>Micro Cresses</li>
                <li>Micro Herbs</li>
                <li>Pea Shoots</li>
                <li>Growing Cresses</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front */}
            <div className="card-front">
              <img
                width="321"
                height="320"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/DK8315-copy.jpg"
                className="card-image prepared-produce"
                alt="Prepared Produce"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/DK8315-copy.jpg 321w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/DK8315-copy-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/DK8315-copy-150x150.jpg 150w"
                sizes="(max-width: 321px) 100vw, 321px"
              />
              <div className="card-label">
                Prepared
                <br /> Produce
              </div>
            </div>

            {/* Back */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Fresh Juices</li>
                <li>Fruit Salad</li>
                <li>Fruit Segments</li>
                <li>Prepared Broccoli</li>
                <li>Prepared Carrots</li>
                <li>Prepared Cauliflower</li>
                <li>Prepared Potatoes</li>
                <li>Prepared Salads</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img
                width="320"
                height="321"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/8.jpg"
                className="card-image dairy-chilled"
                alt="Dairy & Chilled"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/8.jpg 320w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/8-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/8-150x150.jpg 150w"
                sizes="(max-width: 320px) 100vw, 320px"
              />
              <div className="card-label">
                Dairy &<br /> Chilled
              </div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <p className="card-back-points">
                <li>Butter</li>
                <li>Chilled Stock’s</li>
                <li>Free Range Eggs</li>
                <li>Fresh Pasta</li>
                <li>Fresh Yeast</li>
                <li>Liquid Egg</li>
                <li>Milk &amp; Cream</li>
                <li>Milk Alternatives</li>
                <li>Yoghurt’s</li>
                <li>And More</li>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img
                width="321"
                height="321"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/31.jpg"
                className="card-image cheese"
                alt="Cheese"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/31.jpg 321w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/31-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/31-150x150.jpg 150w"
                sizes="(max-width: 321px) 100vw, 321px"
              />
              <div className="card-label">Cheese</div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <p className="card-back-points">
                <li>Blue Cheese</li>
                <li>Burrata</li>
                <li>Camembert</li>
                <li>Cheddar</li>
                <li>Emmental</li>
                <li>Feta</li>
                <li>Goats Log</li>
                <li>Halloumi</li>
                <li>Mozzarella</li>
                <li>And More</li>
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img
                width="319"
                height="321"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/21.jpg"
                className="card-image charcutrie"
                alt="Charcuterie"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/21.jpg 319w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/21-298x300.jpg 298w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/21-150x150.jpg 150w"
                sizes="(max-width: 319px) 100vw, 319px"
              />
              <div className="card-label">Charcuterie</div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Artichoke</li>
                <li>Chorizo</li>
                <li>Mistoliva Olives</li>
                <li>Pancetta</li>
                <li>Pesto</li>
                <li>Serrano Ham</li>
                <li>Finocchiona Salami</li>
                <li>Sun Blushed Tomatoes</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img
                width="320"
                height="321"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/5.jpg"
                className="card-image bakery"
                alt="Bakery"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/5.jpg 320w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/5-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/5-150x150.jpg 150w"
                sizes="(max-width: 320px) 100vw, 320px"
              />
              <div className="card-label">Bakery</div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Brioche</li>
                <li>Ciabatta</li>
                <li>Crossiants</li>
                <li>Danish</li>
                <li>Focaccia</li>
                <li>Muffins</li>
                <li>Plant Based Brioche Buns</li>
                <li>Sourdough Bloomers</li>
                <li>Tin Loafs</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img
                width="321"
                height="321"
                src="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/35.jpg"
                className="card-image dry-store"
                alt="Dry Store"
                decoding="async"
                srcSet="https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/35.jpg 321w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/35-300x300.jpg 300w, https://www.kaleanddamson.co.uk/wp-content/uploads/2024/12/35-150x150.jpg 150w"
                sizes="(max-width: 320px) 100vw, 321px"
              />
              <div className="card-label">Dry Store</div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <ul className="card-back-points">
                <li>Tinned</li>
                <li>Condiments</li>
                <li>Cooking Ingredients</li>
                <li>Cooking Sauces</li>
                <li>Juices</li>
                <li>Parchment, Foil, Film</li>
                <li>Stocks, Vinegars, Oils</li>
                <li>Sugars</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProduceSection;
