import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./NewsSingle.css";

function NewsSingle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://fedev.fues.hr/backend/wp-json/wp/v2/posts?slug=${slug}&_embed`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
        }
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, [slug]);

  if (!post) {
    return <div>Učitavanje...</div>;
  }

  return (
    <main className="news-single">
      <div className="container">
        <div className="row py-4 py-mb-0 p-mb-5">
          {!loading ? (
            <div>
              <h1>{post.title.rendered}</h1>
              <span>{formatDate(post.date)}</span>

              <img
                className="my-2"
                src={
                  post._embedded?.["wp:featuredmedia"]?.[0]?.media_details
                    ?.sizes?.full?.source_url
                }
                alt="cover-img"
              />
              <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          ) : (
            <div class="spinner center">
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default NewsSingle;
