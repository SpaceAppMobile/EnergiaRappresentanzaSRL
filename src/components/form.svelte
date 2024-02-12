<script>
  //import { e } from "../../dist/chunks/vendor.f7719c68";

  const FORMSPARK_ACTION_URL = "https://submit-form.com/72m6zZzii";

  let name = "";
  let number = "";
  let email = "";
  let message = "";
  let submitting = false;

  async function onSubmit() {
    try {
      submitting = true;
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          email,
          message,
        }),
      });
      name = "";
      number = "";
      email = "";
      message = "";
      //alert("Form submitted");
    } catch {
      console.log("Somethig goes wrong");
    } finally {
      submitting = false;
    }
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="form-group mb-6">
    <input
      type="text"
      bind:value={name}
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
      placeholder="Nome"
      required
    />
  </div>
  <div class="form-group mb-6">
    <input
      type="email"
      bind:value={email}
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
      placeholder="Email"
      required
    />
  </div>
  <div class="form-group mb-6">
    <input
      type="number"
      bind:value={number}
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
      placeholder="Numero"
      required
    />
  </div>
  <div class="form-group mb-6">
    <textarea
      bind:value={message}
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
      rows="4"
      placeholder="Messaggio"
      required
    />
  </div>
  <button
    type="submit"
    disabled={submitting}
    class="w-full px-6 py-2.5 bg-[#16A349] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
    >Invia</button
  >
</form>
