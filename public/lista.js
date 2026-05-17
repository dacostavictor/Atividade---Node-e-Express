async function carregarFeedbacks() {
  const resposta = await fetch("/feedbacks");

  const feedbacks = await resposta.json();

  const ul = document.getElementById("ul");

  for (let i = 0; i < feedbacks.length; i++) {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${feedbacks[i].nome}:</b>
      ${feedbacks[i].feedback}
    `;

    ul.appendChild(li);
  }
}

carregarFeedbacks();
