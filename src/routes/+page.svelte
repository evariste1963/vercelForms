<script>
  export let form;
</script>

<form method="POST">
  <input name="name" placeholder="name" />
  <input name="email" placeholder="email" type="email" />
  <button type="submit">submit</button>
</form>

{#if form?.success}
  <p>{form.name}</p>
  <p>{form.email}</p>
  <p>form successfully submitted 😃</p>
{/if}
