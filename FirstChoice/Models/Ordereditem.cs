using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Ordereditem
{
    public int Id { get; set; }

    public double? Price { get; set; }

    public int? Quantity { get; set; }

    public int? OId { get; set; }

    public int? PId { get; set; }

    public virtual Order? OIdNavigation { get; set; }

    public virtual Product? PIdNavigation { get; set; }
}
