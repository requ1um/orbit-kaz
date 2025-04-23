POST /api/notices/updateStatus
{
  noticeId: number,
  newStatus: "Approved" | "Denied"
}
