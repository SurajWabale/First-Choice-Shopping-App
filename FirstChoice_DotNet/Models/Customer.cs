using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Customer
{
    public int CId { get; set; }

    public string? CName { get; set; }

    public string? Email { get; set; }

    public string? Contact { get; set; }

    public string? Address { get; set; }

    public int? LId { get; set; }

    public virtual Login? LIdNavigation { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
