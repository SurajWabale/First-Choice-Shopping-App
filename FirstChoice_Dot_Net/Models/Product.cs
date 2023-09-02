using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Product
{
    public int PId { get; set; }

    public string PName { get; set; } = null!;

    public string? PDesc { get; set; }

    public decimal Price { get; set; }

    public byte[]? PImage { get; set; }

    public int? SId { get; set; }

    public int? BId { get; set; }

    public int? CId { get; set; }

    public int? VId { get; set; }

    public int? Quantity { get; set; }

    public virtual Brand? BIdNavigation { get; set; }

    public virtual Category? CIdNavigation { get; set; }

    public virtual ICollection<Ordereditem> Ordereditems { get; set; } = new List<Ordereditem>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual Size? SIdNavigation { get; set; }

    public virtual Vendor? VIdNavigation { get; set; }
}
