

App is available on http://bill-split.s3-website-us-west-1.amazonaws.com/

# Split

An app written in ReactJS and utilizing BootStrap to split bills with friends when a single person pays for a whole meal. 
The app takes in the following user inputs:
 * One or more friends
 * One or more meals 
 * One or more line items per meal,
 * and displays a final group balance in a JSON string. 
 


## Getting Started
Live Site available at http://bill-split.s3-website-us-west-1.amazonaws.com/


### Prerequisites
To install and run locally for Mac: 
You'll need XCode, Homebrew, and NodeJS, and npm

XCode is free and you can find it in the 
[Apple App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

Homebrew is a package manager for the Mac — it makes installing most open source sofware (like Node) as simple as writing brew install node. You can learn more about Homebrew at the Homebrew website. 
To install Homebrew just open Terminal and type `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
To install NodeJS and NPM, type `brew install node`


```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
$ brew install node
```


### Installing
These instructions will get you a copy of the project up and running on your local machine for testing purposes. Process usually takes about 4-5 minutes
Within a terminal on your linux/mac: 
```
$ git clone git@github.com:vinhdang84/split.git
$ cd split
$ npm install
$ npm start
```

Once installed, you will see a browser window load `localhost:3000`

1. Within the app, enter in a set of friends under 'Add Friend'. Hitting Enter or Clicking "+ Add Friend" will work.
Example of some names. 
```
Aliza
Maria
Tony
Karen 
Chad
Apurva
```

2. Once entered, look underneath 'Add Meal'
Choose a single payer. In this case choose "Maria". 

3. Under "Description", you can choose a meal description such as "Brunch"

4. Click "Add Line Item" button which will add a line item row every time it is clicked. Let's click it two times for two line items.

5. Within each line item, enter in: 
```
LineItem: French Toast   Price: 15  Consumer: Aliza, Maria, Tony, Karen
LineItem: Eggs Benedict  Price: 15  Consumer: Aliza, Karen
```

6. Click "Save Meal"

7. Notice on the right hand side of the app, you will see: 
```
Maria: {
  Aliza: $11.25
  Tony: $3.75
  Karen:$11.25
}
```


The "Add Meal" form will reset, and we will now add another meal. 

8. Enter in the following: 
```
Payer: Karen
Description: Dinner
``` 

9. Click "Add Line Item" 6 times for 6 line item fields. 

10. Add the following Line Items:
```
LineItem: Classic Spaghetti     Price: $12   Consumer: Apurva, Tony
LineItem: Calamari:             Price: $15   Consumer: Chad, Tony, Maria
LineItem: Baked Brussel Sprouts Price: $10   Consumer: Aliza, Apurva
LineItem: Lasagna               Price: $15   Consumer: Chad
LineItem: Bottle of Wine        Price: $40   Consumer: Aliza, Karen, Maria, Chad
LineItem: Burger                Price: $12   Consumer:  Maria
```

11. Click the "Add Meal" button

12. Balance shall now show: 
```
Karen: {
  Maria: $10.75
  Chad: $30
  Tony: $11

  Aliza: $25
  Apurva: $11
}
Maria: {
  Aliza: $11.25
  Tony: $3.75
  }
```

## Running the tests

There are no tests at this time. This will be updated once tests are implemented. 

### Break down into end to end tests

There are no tests at this time. This will be updated once tests are implemented. 


### And coding style tests

There are no tests at this time. This will be updated once tests are implemented. 

## Deployment

I've deployed it onto an AWS bucket. The steps are relatively simple. 

Within the split folder that you installed the application in, run: 
`npm run build`

Set up a free AWS S3 site. I used the following to set up the S3 bucket only

[resource_minus_yarn](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a)
.

Afterwards, I uploaded everything within the build folder into the s3 bucket.

## Built With

* [ReactJS](https://reactjs.org/) - a JavaScript library for building user interfaces.
* [BootStrap](http://getbootstrap.com/) - Used to generate CSS 



## Authors

* **Vinh Dang** - *Initial work* - [vinhdang84](https://github.com/vinhdang84)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Wesbos for his course on ReactJS where I learned how to code from scratch
* https://wesbos.slack.com/ for the many users who reached out and helped me debug,learn javascript and reactJS, and their help with my group balance sheet
* Hung Nguyen for help in catching my error in creating an object in state but setting state as an array.
* Danh Dang for his help in structuring my data to fit the project need
