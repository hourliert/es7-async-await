function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.floor(Math.random() * 100);

      if (rand < 50) {
        resolve({
          value: rand
        });
      } else {
        reject(new Error('bad luck'));
      }

    }, 1000);
  });
}

async function main() {
  console.log('Waiting for asyncTask');

  try {
    let res = await asyncTask();
    console.log('here the result', res);
  } catch (e) {
    console.error(e);
  } finally {
    console.log('asyncTask done');
  }
}

main();
