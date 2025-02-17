 const inputs = document.querySelectorAll(".code");

            inputs.forEach((input, index) => {
                input.addEventListener("input", (e) => {
                    if (e.target.value.length === 1) {
                        if (index < inputs.length - 1) {
                            inputs[index + 1].focus();
                        }
                    }
                });

                input.addEventListener("keydown", (e) => {
                    if (e.key === "Backspace") {
                        if (e.target.value === "") {
                            if (index > 0) {
                                inputs[index - 1].focus();
                                inputs[index - 1].value = ""; // Clear the previous input
                            }
                        } else {
                            e.target.value = ""; // Clear current input
                        }
                    }
                });
            });