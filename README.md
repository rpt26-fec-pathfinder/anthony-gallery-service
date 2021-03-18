# Photo Gallery Service

> The image slider gallery that sits at the top area of the webpage
> (ex. https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/)


## Related Projects

  - https://github.com/rpt26-fec-pathfinder/calvin-more-like-this-service
  - https://github.com/rpt26-fec-pathfinder/tim-review-service
  - https://github.com/rpt26-fec-pathfinder/james-metadata-service
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions:
> 1) npm install -g webpack & npm install dependencies.
> 2) package.json file has scripts, look at the script "npm run seed." This is the script that will populate all the data into mongo.
> If everything went according to plan there should be a "data.json" file in the seed folder showing what was loaded in a JSON format.
>   Note: You might have to update the configs in the "db-models/database.js" file to include your own MONGO_URI to connect to your database first.
>   I have my MONGO_URI saved to a .gitignore'd file so I'm guessing most likely you'll have to make sure you can connect to your own mongodb.
> 3) The script "npm run start" will start the "server.js" file. The command its running is "node ./server/server".
> 4) Everything should be working ...I'm hoping it does 😬 !


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

