/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const user1 = axios.get('https://api.github.com/users/christiano39')
  .then(user => {
    console.log(user.data)
  })
  .catch(err => {
    console.log(err)
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards')
const christiano39 = axios.get('https://api.github.com/users/christiano39')
  .then(userObj => {
    const userCard = cardMaker(userObj.data)
    cards.appendChild(userCard)
  })
  .catch(err => {
    console.log(err)
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(user){
  const cardDiv = document.createElement('div')
  const cardInfo = document.createElement('div')
  const img = document.createElement('img')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profileP = document.createElement('p')
  const profileA = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  cardDiv.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  img.src = user.avatar_url
  img.alt = `Profile picture of ${user.name}`
  name.textContent = user.name
  username.textContent = user.login
  location.textContent = `Location: ${user.location}`
  profileA.href = user.html_url
  profileA.target = "_blank"
  profileA.textContent = `Profile: ${user.html_url}`
  followers.textContent = `Followers: ${user.followers}`
  following.textContent = `Following: ${user.following}`
  bio.textContent = `Bio: ${user.bio}`

  cardDiv.appendChild(img)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  profileP.appendChild(profileA)
  cardInfo.appendChild(profileP)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  cardDiv.appendChild(cardInfo)

  return cardDiv
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
