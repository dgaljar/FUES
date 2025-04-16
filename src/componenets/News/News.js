import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import OurWork from "../OurWork/OurWork";

function News() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     "https://fedev.fues.hr/backend/wp-json/wp/v2/posts?_embed&categories=3"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1500);
  //     });
  // }, []);

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  return (
    <OurWork />
    // <main className="news">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <h1>Novosti</h1>
    //       </div>
    //     </div>

    //     {!loading ? (
    //       posts.map((post) => (
    //         <div className="row" key={post.id}>
    //           <div className="col-md-4">
    //             <Link to={post.slug}>
    //               <img
    //                 src={
    //                   post._embedded?.["wp:featuredmedia"]?.[0]?.media_details
    //                     ?.sizes?.medium?.source_url ||
    //                   post._embedded?.["wp:featuredmedia"]?.[0]?.media_details
    //                     ?.sizes?.full?.source_url
    //                 }
    //                 alt=""
    //               />
    //             </Link>
    //           </div>
    //           <div className="col-md-8 p-4">
    //             <div className="news-container">
    //               <Link to={post.slug}>
    //                 <h2>{post.title.rendered}</h2>
    //               </Link>
    //               <span>{formatDate(post.date)}</span>
    //               <p
    //                 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <div class="spinner center">
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //         <div class="spinner-blade"></div>
    //       </div>
    //     )}
    //   </div>
    // </main>
  );
}

export default News;
