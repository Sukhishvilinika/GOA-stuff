const individual = {
    givenName: 'gela',
    familyName: 'beqauri',
    years: 30,
    profession: 'toilet cleaner (like super mario)',
    marriedStatus: false,

    fullName() {
        return `${this.givenName} ${this.familyName}`;
    },

    celebrateBirthday() {
        this.years++;
        console.log(`Happy Birthday, ${this.givenName}! You are now ${this.years} years young.`);
    }
};

individual.years = 31;
individual.contactEmail = 'john.doe@example.com';
delete individual.marriedStatus;

console.log('Individual Details:', individual);

for (const property in individual) {
    if (individual.hasOwnProperty(property)) {
        console.log(`${property}: ${individual[property]}`);
    }
}

console.log('Complete Name:', individual.fullName());
individual.celebrateBirthday();
