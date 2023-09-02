using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Brand
{
    public int BId { get; set; }

    public string BName { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
