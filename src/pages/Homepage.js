import "./styles/Homepage.css";

function Homepage(){
  return (
    <main className="main">
      <section className="hero-container">
        <h1 className="hero-title">Blog of Marx Wang</h1>
        <p className="hero-subtitle">Welcome to my blog!</p>
      </section>
      <section className="option-container">
        {[{'title': "All Blogs","url":"/blogs/","alt":"get all blogs"},{"title":"Sample Blogs","url":"/blogs/12","alt":"Sampling"},{"title":"Nothing","url":"/404","alt":"I've told you there's nothing in here."}].map((option)=>{
          return (
            <a key={option.alt} href={option.url} about={option.alt} className="option">
              <h1 className="option-title">{option.title}</h1>
              <p className="option-descrip">{option.alt}</p>
            </a>
          )
        })}
      </section>
    </main>
  )
};

export default Homepage;