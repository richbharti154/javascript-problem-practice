const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

function profileLookup(name, property) {
    for(let i=0;i<facebookProfiles.length;i++){
        const profile=facebookProfiles[i]
        if (profile.firstName === name) {
            return profile[property] ? profile[property] : "no such property";
            }
            }
            return "person does not exist";
            }                                                     // find out name and poperty
         console.log(profileLookup('name','property'))
         


         function getNamesFromGurgaon() {
            const result = [];
            for (let index = 0; index < facebookProfiles.length; index++) {
            const person = facebookProfiles[index];
            if (person.address.location === "gurgaon") {                     // this method belong to gurgaon
            //Edge case: when last name is not present
            const name = person.firstName + " " + (person.lastName || "");
            result.push(name);
            }
        }
        return result;
        }
        console.log(getNamesFromGurgaon('result'))

//         const fullNames = facebookProfiles
//   .filter((person) => person.address.location === "gurgaon")      // this is method belong to gurgaon but higher order method
//   .map((person) => person.firstName + " " + (person.lastName || ""));

//     console.log(fullNames);

function findName(stateName) {
    let name = "person not found"
    for (let index = 0; index < facebookProfiles.length; index++) {
    const person = facebookProfiles[index];
    const { address, firstName, lastName } = person;
    if (address.state === stateName) {
    name = firstName + " " + (lastName || "");
    break;
    }
    }
    return name
    }
    console.log(findName('StateName'))


    function printNamesUpdated() {
        const nameArr = [];
        for (let i = 0; i < facebookProfiles.length; i++) {
        const { firstName, lastName } = facebookProfiles[i];
        const fullName = firstName + " " + (lastName || "");
        nameArr.push(fullName);
        }
        return nameArr
        }                                               // adding firstname and last name
        console.log(printNamesUpdated('nameArr'))

 