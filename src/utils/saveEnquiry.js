export async function saveEnquiry(entry) {
  try {
    const enquiries = JSON.parse(localStorage.getItem('stratum-enquiries') || '[]');
    enquiries.push({ ...entry, createdAt: new Date().toISOString() });
    localStorage.setItem('stratum-enquiries', JSON.stringify(enquiries));
  } catch (error) {
    console.warn('Could not save enquiry locally.', error);
  }

  return true;
}
