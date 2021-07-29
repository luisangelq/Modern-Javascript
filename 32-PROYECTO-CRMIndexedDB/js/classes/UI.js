
class UI {
  printAlert = (message, type) => {
    const deleteAlert = document.querySelector(".alertM");
    if (!deleteAlert) {
      const alert = document.createElement("div");
      alert.classList.add(
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center",
        "border",
        "alertM"
      );

      if (type === "error") {
        alert.classList.add("bg-red-200", "border-red-400", "text-red-700");
      } else {
        alert.classList.add(
          "bg-green-200",
          "border-green-400",
          "text-green-700"
        );
      }
      alert.textContent = message;

      form.appendChild(alert);

      setTimeout(() => {
        alert.remove();
      }, 3000);
    }
  };
}

export default UI;
