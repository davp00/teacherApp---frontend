export class RequestInformation {

    constructor(
      public status: Number,
      public message: String
    )
    {

    }

    public Status(status)
    {
        return this.status === status;
    }
}
