using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Vendor
{
    public int VId { get; set; }

    public string VName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string ShopLicenceId { get; set; } = null!;

    public int? LId { get; set; }

    public virtual Login? LIdNavigation { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
