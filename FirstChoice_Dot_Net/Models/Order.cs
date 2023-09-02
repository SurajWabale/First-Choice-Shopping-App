using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Order
{
    public int OId { get; set; }

    public int CId { get; set; }

    public DateOnly Date { get; set; }

    public double TotalAmount { get; set; }

    public string? ShippingAddress { get; set; }

    public int? Id { get; set; }

    public int? PId { get; set; }

    public virtual Customer CIdNavigation { get; set; } = null!;

    public virtual ICollection<Ordereditem> Ordereditems { get; set; } = new List<Ordereditem>();

    public virtual Product? PIdNavigation { get; set; }
}
