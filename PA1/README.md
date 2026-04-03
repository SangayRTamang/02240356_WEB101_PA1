# Instagram-clone — JavaScript (React + Vite)

Overview
This project is a React-based of the Instagram webpage replica using Vite and react but it isn't exactly like the original instagram webpage 
The application replicates the core layout and UI of instagrams browse page including the navgiation bar, stories bar, and posts.

## Tech Stack

- React 19 + Vite 8
- JavaScript
- CSS Modules per component

## Component Structure
src    
|──components
|    ├── TopNav                         
|    ├── BottomNav                           
|    |── StoriesBar                (reusable)
|    │── PostCard                  (reusable)
|    |── Sidebar
|
|── data
|    |── feedData
|
|──images

## Data

All the mock data lives in `src/data/feedData.js` and is passed into `StoriesBar`, `PostCard`, and `Sidebar`.

## Reusable Components

StoriesBar - username, color.
PostCard - username, locaton, profilephoto, letters, likes, comments, caption, images

Remote placeholder images: https://i.pinimg.com/736x/85/e6/47/85e64767b129d2cae2d1c47b1ed0aece.jpg  https://drukcdn.blob.core.windows.net/www/images/media/why-dzong1.png https://jetsun.org/media/rlak1oqm/hrh-sonam-yangden-wangchuck-family-portrait.jpeg?width=500&height=333.251953125.
