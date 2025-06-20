import React, { useState } from "react";
import "./InstaSection.css";

const posts = [
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/504504543_18514239427031295_4436646266248267919_nfull.webp",
    alt: "A fantastic afternoon at the 2025 Velvet Suffolk Food & Drink Awards!",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/504508902_18514042969031295_4560653631874784328_nlow.webp",
    alt: "𝗡𝗢𝗪 𝗜𝗡 𝗦𝗧𝗢𝗖𝗞: 𝗧𝗥𝗔𝗖𝗞𝗟𝗘𝗠𝗘𝗡𝗧𝗦",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/495030451_18505825459031295_2677305531939774069_nlow.webp",
    alt: "Supplying Portwood Asparagus from Norfolk",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/491441778_18503504773031295_7795242731243504531_nlow.webp",
    alt: "Spring’s finest - English Heritage Tomato, Morels, Jersey Royals",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/491441778_18503504773031295_7795242731243504531_nlow.webp",
    alt: "Spring’s finest - English Heritage Tomato, Morels, Jersey Royals",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/489370172_18501828763031295_7156448093606522820_nlow.webp",
    alt: "Easter Bank Holiday Delivery Schedule",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/485168388_18497549200031295_5676082687505727088_nlow.webp",
    alt: "Spring’s finest ingredients – strawberries, wild garlic, more",
    type: "image",
  },
  {
    mediaUrl:
      "https://www.kaleanddamson.co.uk/wp-content/uploads/sb-instagram-feed-images/475725146_2014513295720526_8149750506012948973_nlow.webp",
    alt: "Fresh Italian spinach, vibrant and crisp",
    type: "image",
  },
];
function InstaSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  return (
    <div className="decor">
      <section className="instagram-section">
        <h2 className="insta-heading">Latest from our Instagram</h2>
        <div className="insta-grid">
          {posts.slice(0, visibleCount).map((post, index) => (
            <div key={index} className="insta-post">
              {post.type === "video" ? (
                <video controls src={post.mediaUrl} />
              ) : (
                <img src={post.mediaUrl} alt={post.alt} />
              )}
            </div>
          ))}
        </div>
        <div className="buttons">
          {visibleCount < posts.length && (
            <button className="loadMore-btn" onClick={loadMore}>
              Load More <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          )}
          <a
            href="https://instagram.com/kaleanddamson"
            target="_blank"
            rel="noreferrer"
          >
            <button className="insta-follow-btn">
              Follow on Instagram <ion-icon name="logo-instagram"></ion-icon>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
export default InstaSection;
