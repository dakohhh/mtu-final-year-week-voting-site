import React from "react";

function HomeScreen() {
  const links = [
    "https://strawpoll.com/eNg6v6qbegA",
    "https://strawpoll.com/e7ZJaxKaGg3",
    "https://strawpoll.com/7MZ0k8qAwgo",
    "https://strawpoll.com/eJnvVxQ74nv",
    "https://strawpoll.com/mpnb1GEQGy5",
    "https://strawpoll.com/kjn1DlrV0yQ",
    "https://strawpoll.com/6QnMQm0Yane",
    "https://strawpoll.com/Dwyo3E47XyA",
    "https://strawpoll.com/kogjReYmNg6",
    "https://strawpoll.com/xVg71RrVzyr",
    "https://strawpoll.com/LVyK2EbQRZ0",
    "https://strawpoll.com/61gD9QYeLZw",
    "https://strawpoll.com/XOgOVaK0Gn3",
    "https://strawpoll.com/PKgle6Wl4Zp",
    "https://strawpoll.com/xVg71RqrOyr",
    "https://strawpoll.com/e2naXNKOVyB",
    "https://strawpoll.com/jVyG2pKaYZ7",
    "https://strawpoll.com/3RnYXwKWAye",
    "https://strawpoll.com/X3nkP9zAKgE",
    "https://strawpoll.com/3RnYXwPGmye",
    "https://strawpoll.com/6QnMQmYePne",


  ];

  const titles = [
    "Most Endowed",
    "Most Fashionable Male",
    "Best Behaved Male",
    "Miss Ebony",
    "Rich Aunty",
    "Entrepreneur of the year",
    "Most Beautiful",
    "Best singer Female",
    "Best sportsman male",
    "Take home to mama/ papa (female)",
    "Most Portable",
    "Best Behaved Female",

    "Take home to mama/ papa (male)",
    "Most Handsome",
    "Most Influential Male",
    "Rich Uncle",
    "Fashion Designer of the year",
    "Most Fashionable Female",
    "Best sports lady",
    "Most Influential Female",
    "Best Female Friend Group Of The Year ( Female )"
  ];

  const handleInputClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center">
                  {links.map((link, index) => (
                    <div key={index} className="mb-4" style={{ textAlign: "center", marginTop: "20px" }}>
                      <div className="category-card" style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "50px", background: "#f2f2f2", padding: "10px", borderRadius: "8px" }}>
                        <div className="category-content">
                          <h3 className="category-title">{titles[index]}</h3>
                          <div className="input-group" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 0" }}>
                            <input
                              type="text"
                              className="form-control clickable-input"
                              value={link}
                              readOnly={true}
                              onClick={() => handleInputClick(link)}
                              style={{ cursor: "pointer", width: "80%", paddingTop: "30px", marginTop: "auto", textAlign: "center", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
