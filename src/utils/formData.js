export async function getFormData(request) {
  const formData = await request.formData();
  return Object.fromEntries(formData);
}
