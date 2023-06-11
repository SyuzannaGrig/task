const { Builder, By, Key, until } = require('selenium-webdriver');

// signup 
async function signUpScenario1() {
  const driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.automationexercise.com/login');
    await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys('John');
    await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys('John.smith@gmail.com');
    await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();

  } finally {
    await driver.quit();
  }
}


// empty email address
async function signUpScenario2() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.automationexercise.com/login');

      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys('John');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }
  
// empty name
async function signUpScenario3() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.automationexercise.com/login');

      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys('John.smith@gmail.com');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }


// empty name and email address
async function signUpScenario4() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.automationexercise.com/login');

      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }


// input with numbers
async function signUpScenario5() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.automationexercise.com/login');

      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys('4516');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys(' 155   ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }

//  input with symbols
async function signUpScenario6() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.automationexercise.com/login');

      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys('%8)');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys('#######');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }



//  field length
async function signUpScenario7() {
    const driver = new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.automationexercise.com/login');

      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]')).sendKeys('J');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]')).sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[3]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }




// sign in
async function signInScenario1() {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.automationexercise.com/login');
    await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys('john.smith@gmail.com');
    await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys('1234');
    await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();

  } finally {
    await driver.quit();
  }
}


// invalid pswd
async function signInScenario2() {
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.automationexercise.com/login');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys('john.smith@gmail.com');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys('1234*hi');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }
  
  
  
// no pswd
async function signInScenario3() {
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.automationexercise.com/login');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys('john.smith@gmail.com');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }



// pswd with spaces
async function signInScenario4() {
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.automationexercise.com/login');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys('john.smith@gmail.com');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys('   1234   ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }





// no email
async function signInScenario5() {
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.automationexercise.com/login');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys('');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys('1234');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }




// empty fields
async function signInScenario6() {
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.automationexercise.com/login');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys(' ');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }



// with symbols
async function signInScenario7() {
    const driver = new Builder().forBrowser('chrome').build();
  
    try {
      await driver.get('https://www.automationexercise.com/login');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]')).sendKeys('$%***~!`');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]')).sendKeys('&*)_+');
      await driver.findElement(By.xpath('//*[@id="form"]/div/div/div[1]/div/form/button')).click();
  
    } finally {
      await driver.quit();
    }
  }






signUpScenario1()
    .then(() => signUpScenario1())
    .then(() => signUpScenario2())
    .then(() => signUpScenario3())
    .then(() => signUpScenario4())
    .then(() => signUpScenario5())
    .then(() => signUpScenario6())
    .then(() => signUpScenario7())

    .then(() => signInScenario1())
    .then(() => signInScenario2())
    .then(() => signInScenario3())
    .then(() => signInScenario4())
    .then(() => signInScenario5())
    .then(() => signInScenario6())
    .then(() => signInScenario7())

    .catch((error) => console.error('An error occurred:', error));
