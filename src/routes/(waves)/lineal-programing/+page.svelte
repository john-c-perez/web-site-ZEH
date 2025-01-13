<script lang="ts">
  import ContentSection from '$lib/components/organisms/ContentSection.svelte';
  let resultado = null;
  let error = null;

  let data = {
    K: 30,
    c1: 100,
    c2: 500,
    c3: 0.05,
    c4: 0.25,
    gamma: 0.9,
    r: 0.2,
    X_max: 20,
    generacion_solar: [
      5.1, 5.3, 5.7, 5.5, 4.9, 5.2, 5.4, 5.6, 5.5, 5.3,
      5.0, 5.1, 5.2, 5.4, 5.7, 5.3, 5.1, 5.6, 5.5, 5.4,
      5.3, 5.7, 5.5, 5.1, 5.3, 5.4, 5.2, 5.1, 5.3, 5.4
    ],
    consumo_energia: [
      10.5, 11.0, 10.8, 10.3, 10.9, 10.4, 10.7, 11.1, 10.6, 10.2,
      10.7, 10.9, 10.5, 10.3, 10.8, 10.6, 10.4, 11.0, 10.9, 10.7,
      10.8, 10.5, 10.6, 10.9, 10.4, 10.2, 10.8, 10.7, 10.5, 10.6
    ]
  };

  // Formulario de entrada de datos
  let formData = { ...data };

  // Cadena para generacion_solar y consumo_energia
  let generacion_solar_input = formData.generacion_solar.join(',');
  let consumo_energia_input = formData.consumo_energia.join(',');

  async function enviarDatos() {
    try {
      // Convertir las cadenas de vuelta a arrays
      formData.generacion_solar = generacion_solar_input.split(',').map(Number);
      formData.consumo_energia = consumo_energia_input.split(',').map(Number);

      if (formData.generacion_solar.length !== formData.K || formData.consumo_energia.length !== formData.K) {
        throw new Error(`Las listas 'generacion_solar' y 'consumo_energia' deben tener exactamente ${formData.K} elementos.`);
      }

      const response = await fetch('https://model-production-9109.up.railway.app/optimize/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el servidor');
      }

      resultado = await response.json();
      error = null;
    } catch (e) {
      resultado = null;
      error = e.message;
    }
  }

  // Actualizar el objeto formData cuando se cambien los valores del formulario
  function actualizarFormData() {
    formData = { ...data };
    generacion_solar_input = formData.generacion_solar.join(',');
    consumo_energia_input = formData.consumo_energia.join(',');
  }
  import ContentSection from '$lib/components/organisms/ContentSection.svelte';
  let resultado = null;
  let error = null;

  let data = {
    K: 30,
    c1: 100,
    c2: 500,
    c3: 0.05,
    c4: 0.25,
    gamma: 0.9,
    r: 0.2,
    X_max: 20,
    generacion_solar: [
      5.1, 5.3, 5.7, 5.5, 4.9, 5.2, 5.4, 5.6, 5.5, 5.3,
      5.0, 5.1, 5.2, 5.4, 5.7, 5.3, 5.1, 5.6, 5.5, 5.4,
      5.3, 5.7, 5.5, 5.1, 5.3, 5.4, 5.2, 5.1, 5.3, 5.4
    ],
    consumo_energia: [
      10.5, 11.0, 10.8, 10.3, 10.9, 10.4, 10.7, 11.1, 10.6, 10.2,
      10.7, 10.9, 10.5, 10.3, 10.8, 10.6, 10.4, 11.0, 10.9, 10.7,
      10.8, 10.5, 10.6, 10.9, 10.4, 10.2, 10.8, 10.7, 10.5, 10.6
    ]
  };

  // Formulario de entrada de datos
  let formData = { ...data };

  // Cadena para generacion_solar y consumo_energia
  let generacion_solar_input = formData.generacion_solar.join(',');
  let consumo_energia_input = formData.consumo_energia.join(',');

  async function enviarDatos() {
    try {
      // Convertir las cadenas de vuelta a arrays
      formData.generacion_solar = generacion_solar_input.split(',').map(Number);
      formData.consumo_energia = consumo_energia_input.split(',').map(Number);

      if (formData.generacion_solar.length !== formData.K || formData.consumo_energia.length !== formData.K) {
        throw new Error(`Las listas 'generacion_solar' y 'consumo_energia' deben tener exactamente ${formData.K} elementos.`);
      }

      const response = await fetch('https://model-production-9109.up.railway.app/optimize/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el servidor');
      }

      resultado = await response.json();
      error = null;
    } catch (e) {
      resultado = null;
      error = e.message;
    }
  }

  // Actualizar el objeto formData cuando se cambien los valores del formulario
  function actualizarFormData() {
    formData = { ...data };
    generacion_solar_input = formData.generacion_solar.join(',');
    consumo_energia_input = formData.consumo_energia.join(',');
  }
</script>

<div class="container">
  <h1>Formulario de Ingreso de Datos</h1>

  <!-- Formulario para ingresar datos manuales -->
  <form on:submit|preventDefault={enviarDatos}>
    <div class="form-group">
      <label for="K">K:</label>
      <input type="number" id="K" bind:value={formData.K} />
    </div>
    <div class="form-group">
      <label for="c1">c1:</label>
      <input type="number" id="c1" bind:value={formData.c1} />
    </div>
    <div class="form-group">
      <label for="c2">c2:</label>
      <input type="number" id="c2" bind:value={formData.c2} />
    </div>
    <div class="form-group">
      <label for="c3">c3:</label>
      <input type="number" id="c3" bind:value={formData.c3} step="0.01" />
    </div>
    <div class="form-group">
      <label for="c4">c4:</label>
      <input type="number" id="c4" bind:value={formData.c4} step="0.01" />
    </div>
    <div class="form-group">
      <label for="gamma">Gamma:</label>
      <input type="number" id="gamma" bind:value={formData.gamma} step="0.01" />
    </div>
    <div class="form-group">
      <label for="r">r:</label>
      <input type="number" id="r" bind:value={formData.r} step="0.01" />
    </div>
    <div class="form-group">
      <label for="X_max">X_max:</label>
      <input type="number" id="X_max" bind:value={formData.X_max} />
    </div>
    <div class="form-group">
      <label for="generacion_solar">Generación Solar (separada por comas):</label>
      <input type="text" id="generacion_solar" bind:value={generacion_solar_input} />
    </div>
    <div class="form-group">
      <label for="consumo_energia">Consumo de Energía (separado por comas):</label>
      <input type="text" id="consumo_energia" bind:value={consumo_energia_input} />
    </div>

    <button type="submit">Enviar Datos</button>
  </form>

  <!-- Resultados -->
{#if resultado}
  <div class="resultado">
    <h2>Resultado del endpoint:</h2>
    <table class="resultado-table">
      <thead>
        <tr>
          <th>Parámetro</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Área del Panel (m²)</td>
          <td>{resultado.results.Area_Panel_m2}</td>
        </tr>
        <tr>
          <td>Capacidad de la Batería (kWh)</td>
          <td>{resultado.results.Capacidad_Bateria_kWh}</td>
        </tr>
        {#each resultado.results.Estado_Carga_kWh as estado, index}
          <tr>
            <td>Estado de Carga (kWh) {index + 1}</td>
            <td>{estado}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

  <!-- Error -->
  {#if error}
    <div class="error">
      <h2>Error:</h2>
      <p>{error}</p>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    position: relative;
  }

  .form-group {
    margin: 1rem 0;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:hover {
    background-color: #218838;
  }

  .floating-button {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    z-index: 9999;
  }

  .floating-button:hover {
    background-color: #218838;
  }

  .json-display {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #e6ffe6;
    border: 1px solid #b2ffb2;
    color: #155724;
  }

  .resultado, .error {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
  }

  .resultado-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  .resultado-table th, .resultado-table td {
    border: 1px solid #b2ffb2;
    padding: 0.75rem;
    text-align: left;
  }

  .resultado-table th {
    background-color: #e6ffe6;
    color: #155724;
    
  }

  .resultado-table td {
    background-color:rgb(255, 255, 255);
    color:rgb(0, 0, 0);
  }

  .resultado-table tr:nth-child(even) td {
    background-color: #e6ffe6;
  }

  .resultado-table tr:hover td {
    background-color: #d4f9d4;
  }

  .error {
    background-color: #ffe6e6;
    border: 1px solid #ffb2b2;
    color: #721c24;
  }
</style>