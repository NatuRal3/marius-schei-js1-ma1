const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1
const cat = {
  complpain: () => console.log("Meow!"),
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((item) => (item.style.color = "red"));

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = '<p style="background-color: yellow;">New paragraph</p>';

//Question 7
function objectLoop(list) {
  list.forEach((item) => console.log(item.name));
}
objectLoop(cats);

//Question 8
function createCats(cats) {
  let listItems = "";

  cats.forEach((item) => {
    listItems += `
        <div>
            <h5>${item.name}</h5> 
            <p>${item.age ? item.age : "Age unknown"}</p>
        </div>
    `;
  });

  return listItems;
}

const catElements = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catElements;
