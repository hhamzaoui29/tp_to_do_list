window.addEventListener("load", () => {
  // querySelector retourn le premier élement du documet selectionner ici c'est 'form'
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (element) => {
    element.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Veillez remplir la tâche ;)");
      return;
    }
    // Creation de la div "task" qui contiendra la div contente et actions
    const task_el = document.createElement("div");
    task_el.classList.add("task"); 

    // creation de la div content
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_el.append(task_content_el);

    // creation de l'input pour acceuillir les task saisie
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task; 
    task_input_el.setAttribute("readonly", "readonly");
    task_content_el.append(task_input_el);

    // creation de la div actions
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    // creation du bouton edit
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    // creation du bouton delete
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    // on ajoute les deux boutton à la div "task_actions-el"
    task_actions_el.append(task_edit_el);
    task_actions_el.append(task_delete_el);

    // on ajoute la div "task_actions-el" a la div "task_el"
    task_el.append(task_actions_el);

    // on insert(ajoute) la div "task-el" à la div "list_el"
    list_el.append(task_el);

    // Partie modifier ou supprimer un task
    input.value = "";

    // (1) modifier
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {

        // a - on enleve l'option readonly pour pouvoir modifier notre zone de texte
        task_input_el.removeAttribute("readonly");

        // b - grace au focus l'input recevera les instruction du clavier (saisie clavier)
        task_input_el.focus();

        // c - sur click le texte "edite" devient " Save";
        task_edit_el.innerText = "Save";
      } else {

        // ON REMET LE INPUT EN MODE LECTURE SEUL
        task_input_el.setAttribute("readonly", "readonly");

        //ON REMET EDIT AU BOUTON
        task_edit_el.innerText = "Edit";
      }
    });
    
    //(2) Supprimer
    task_delete_el.addEventListener("click", () => {
      // on utilise removeChild()  au lieu de remove() car on supprime qu'un seule élement a la fois
      list_el.removeChild(task_el);
    });
  });
});
