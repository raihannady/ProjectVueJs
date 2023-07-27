<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap"
      rel="stylesheet"
    />
    <title>Raihan Nady</title>
  </head>
  <body>
    <section class="mt-5">
      <div class="container">
        <div class="summary">
          <h2>Summary</h2>
          <img src="../assets/img/fp.jpg" alt="" />
          <p class="status">
            Hello! my name is Raihan, Fresh Graduate student of Information
            Systems. I am passionate about Website Development because I have
            several experiences making a website.
          </p>
        </div>

        <div class="biodata">
          <h1>Biodata</h1>
          <div class="category">
            <div class="list-category name">
              Name : <span>M Raihan Nady K</span>
            </div>
            <div class="list-category add">Address : <span>Bogor</span></div>
            <div class="list-category hobb">
              Hobby : <span>Playing Games</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Hanken Grotesk", sans-serif;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: hsl(224, 30%, 27%);
  color: white;
  margin-bottom: 7%;
}

ul {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  padding: 0 1rem;
}

p {
  font-size: 14px;
  text-align: justify;
}

section {
  margin-top: 50%;
  text-align: center;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.container {
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0.3rem 0.3rem 3rem hsl(230, 100%, 95%);
}

.summary {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2.5rem 3rem;
  color: hsl(241, 100%, 89%);
  background-image: linear-gradient(hsl(252, 80%, 59%), hsl(241, 81%, 54%));
  border-radius: 2rem;
}

.summary h1 {
  padding: 1rem 0;
  color: white;
}

img {
  width: 9rem;
  border-radius: 10px;
  margin: 1rem;
}

.status {
  padding: 1rem 0;
}
.biodata {
  border-radius: 1rem;
  padding: 2.5rem 3rem;
}

.biodata h1 {
  text-align: left;
  color: hsl(224, 30%, 27%);
  margin-bottom: 1.4rem;
}

.list-category {
  justify-content: space-between;
  align-items: center;
  text-align: left;
  display: flex;
  height: 3rem;
  width: 100%;
  margin: 2rem 0;
  padding: 0 0.8rem;
  border-radius: 0.3rem;
  gap: 0.5rem;
  font-weight: bold;
}

.name {
  background-color: hsla(0, 100%, 67%, 6%);
  color: hsl(0, 100%, 67%);
}

.add {
  color: hsl(39, 100%, 56%);
  background-color: hsla(39, 100%, 56%, 6%);
}

.hobb {
  color: hsl(166, 100%, 37%);
  background-color: hsla(166, 100%, 37%, 6%);
}

span {
  color: grey;
  margin-left: auto;
}
</style>
