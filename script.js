const aliceTumbling = [
  {
    transform: "rotate(0deg) scale(1)",
    opacity: 1
  },
  {
    transform: "rotate(360deg) scale(0)",
    opacity: 0
  }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards"
};

async function playSequence() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
}

playSequence();