using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Login
{
    public int LId { get; set; }

    public string? Uid { get; set; }

    public string? Pwd { get; set; }

    public int? RoleId { get; set; }

    public sbyte Status { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual Role? Role { get; set; }

    public virtual ICollection<Vendor> Vendors { get; set; } = new List<Vendor>();
}
