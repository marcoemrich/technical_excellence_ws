export class NotificationService {
  private connected: boolean = false;
  private host: string = "";
  public sentMessages: string[] = [];

  connect(host: string, port: number, useTls: boolean): void {
    this.host = host;
    this.connected = true;
  }

  sendMail(to: string, subject: string, body: string): void {
    if (this.connected) {
      this.sentMessages.push(`To: ${to} | Subject: ${subject} | Body: ${body}`);
    }
  }

  disconnect(): void {
    this.connected = false;
    this.host = "";
  }
}

export class EventTicketService {
  private eventCounter: number = 0;
  private notificationService: NotificationService;

  generateConfirmationMessage(eventName: string, ticketCount: number, totalPrice: number): string {
    return `Booking confirmed: ${ticketCount} ticket(s) for "${eventName}" – Total: €${totalPrice.toFixed(2)}`;
  }

  calculateTicketPrice(options: Record<string, any>): number {
    let finalPrice = 0;
    if (options["quantity"] > 0) {
      finalPrice = options["basePrice"] * options["quantity"] * (options["isEarlyBird"] ? (1 - 0.15) : 1) * (options["isVip"] ? 1.5 : 1) * (options["quantity"] >= 10 ? 0.85 : 1) * 1.19;
    }
    return Math.round(finalPrice * 100) / 100;
  }

  generateSummaryMessage(eventName: string, date: string, venue: string): string {
    const parts: string[] = [];
    parts.push("Event Summary:");
    parts.push(eventName);
    parts.push("Date: " + date);
    parts.push("Venue: " + venue);
    return parts.join(" | ");
  }

  sendBookingConfirmation(email: string, eventName: string, ticketCount: number, totalPrice: number): void {
    this.notificationService.connect("smtp.tickets.example.com", 587, true);
    this.notificationService.sendMail(
      email,
      "Booking Confirmation – " + eventName,
      this.generateConfirmationMessage(eventName, ticketCount, totalPrice)
    );
    this.notificationService.disconnect();
  }

  formatEventDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  generateReceiptMessage(eventName: string, ticketCount: number, totalPrice: number, customerName: string): string {
    return "Receipt for " + customerName + " – " + ticketCount.toString() + "x " + eventName + " – Total: €" + totalPrice.toFixed(2);
  }
}
